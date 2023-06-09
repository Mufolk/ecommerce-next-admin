import Layout from '../../components/Layout/Layout'
import { useState } from 'react'
import axios from 'axios'

export default function NewProduct() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const createProduct = (ev) => {
        ev.preventDefault()
        axios.post('/api/products', {
            title,
            description,
            price
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New Product</h1>
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder='Product Name'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Description</label>
                <textarea
                    placeholder='Description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                ></textarea>
                <label>Price (USD)</label>
                <input
                    type="number"
                    placeholder='Price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <button
                    type='submit'
                    className='btn-primary'
                >
                    Save
                </button>
            </form>
        </Layout>
    )
}
