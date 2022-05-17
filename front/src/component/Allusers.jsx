import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../common/redux/userSlice'

const Allusers = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.user.data)
    console.log(userData)

    const del = (index) => {
        dispatch(deleteCart(index))
    }
    return (
        <div className='home'>
            <table>
                <tbody>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>delete</th>

                    </tr>

                    {
                        userData.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td><button onClick={() => del(index)}>delete</button></td>

                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default Allusers