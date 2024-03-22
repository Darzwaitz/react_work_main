// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { createOrder } from '../../services/apiRestaurant'
import Button from '../../ui/Button'
import EmptyCart from '../cart/EmptyCart'
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../store'
import { formatCurrency } from '../../utils/helpers'
import { useState } from 'react'
import { fetchAddress } from '../user/userSlice'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    )

// const fakeCart = [
//     {
//         pizzaId: 12,
//         name: 'Mediterranean',
//         quantity: 2,
//         unitPrice: 16,
//         totalPrice: 32,
//     },
//     {
//         pizzaId: 6,
//         name: 'Vegetale',
//         quantity: 1,
//         unitPrice: 13,
//         totalPrice: 13,
//     },
//     {
//         pizzaId: 11,
//         name: 'Spinach and Mushroom',
//         quantity: 1,
//         unitPrice: 15,
//         totalPrice: 15,
//     },
// ]

function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false)
    const {
        username,
        status: addressStatus,
        position,
        address,
    } = useSelector((state) => state.user)

    const isLoadingAddress = addressStatus === 'loading'

    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    const formErrors = useActionData()

    const cart = useSelector(getCart)
    const totalCartPrice = useSelector(getTotalCartPrice)
    const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0
    const totalPrice = totalCartPrice + priorityPrice

    const dispatch = useDispatch()

    if (!cart.length) return <EmptyCart />

    // const cart = fakeCart

    return (
        <div className=" px-4 py-6">
            <h2 className=" mb-8 text-xl font-semibold">
                Ready to order? Let&apos;s go!
            </h2>

            <Form method="POST" action="">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className=" sm:basis-40">First Name</label>
                    <input
                        className="input grow"
                        type="text"
                        name="customer"
                        defaultValue={username}
                        required
                    />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className=" sm:basis-40">Phone number</label>
                    <div className="grow">
                        <input
                            className="input w-full"
                            type="tel"
                            name="phone"
                            required
                        />
                        {/* error msg  */}
                        {formErrors?.phone && (
                            <p className=" mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                                {formErrors.phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className=" sm:basis-40">Address</label>
                    <div className="grow">
                        <input
                            className="input w-full"
                            type="text"
                            name="address"
                            disabled={isLoadingAddress}
                            defaultValue={address}
                            required
                        />
                    </div>
                    {!position.latitude && !position.longitude && (
                        <span className="absolute right-1 z-50">
                            <Button
                                disabled={isLoadingAddress}
                                type="small"
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(fetchAddress())
                                }}
                            >
                                Get Position
                            </Button>
                        </span>
                    )}
                </div>
                {/* checkbox */}
                <div className="mb-12 flex items-center gap-5">
                    <input
                        className="h-6  w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                        type="checkbox"
                        name="priority"
                        id="priority"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority" className="font-medium">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <Button disabled={isSubmitting} type="primary">
                        {isSubmitting
                            ? 'Placing Order...'
                            : `Order now from ${formatCurrency(totalPrice)}`}
                    </Button>
                </div>
            </Form>
        </div>
    )
}
// named action here as convention
// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'true',
    }

    const errors = {}
    if (!isValidPhone(order.phone))
        errors.phone = 'Please enter a valid phone number'

    if (Object.keys(errors).length > 0) return errors

    // if no errors, create new order and redirect
    const newOrder = await createOrder(order)

    // not great for performance - DO NOT OVERUSE
    store.dispatch(clearCart())

    // redirect here is from react-router
    return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
