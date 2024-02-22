// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { createOrder } from '../../services/apiRestaurant'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    )

const fakeCart = [
    {
        pizzaId: 12,
        name: 'Mediterranean',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: 'Vegetale',
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: 'Spinach and Mushroom',
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
]

function CreateOrder() {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    const formErrors = useActionData()

    // const [withPriority, setWithPriority] = useState(false);
    const cart = fakeCart

    return (
        <div>
            {/* <h2>Ready to order? Let's go!</h2> */}

            <Form method="POST" action="">
                <div>
                    <label>First Name</label>
                    <input
                        className="input"
                        type="text"
                        name="customer"
                        required
                    />
                </div>

                <div>
                    <label>Phone number</label>
                    <div>
                        <input
                            className="input"
                            type="tel"
                            name="phone"
                            required
                        />
                    </div>
                    {formErrors?.phone && <p>{formErrors.phone}</p>}
                </div>

                <div>
                    <label>Address</label>
                    <div>
                        <input
                            className="input"
                            type="text"
                            name="address"
                            required
                        />
                    </div>
                </div>

                <div>
                    <input
                        className="h-6  w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                        type="checkbox"
                        name="priority"
                        id="priority"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <button
                        disabled={isSubmitting}
                        className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Placing Order...' : 'Order now'}
                    </button>
                </div>
            </Form>
        </div>
    )
}
// named action here as convention
export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'on',
    }

    const errors = {}
    if (!isValidPhone(order.phone))
        errors.phone = 'Please enter a valid phone number'

    if (Object.keys(errors).length > 0) return errors

    // if no errors, create new order and redirect
    const newOrder = await createOrder(order)

    // redirect here is from react-router
    return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
