import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import AuthLayout from 'src/components/layout/AuthLayout'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import InputText from 'src/components/InputText'
import { Link } from 'react-router-dom'
import API from '../../util/API'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required('Email address is required').email('Invalid email address'),
    password: yup.string().required().min(8),
    password_confrimation: yup.string().required().min(8)
})
  .required();

const SignUp = () => {
    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        // set page title
        document.title = "Sign Up | Fuel Credit"
    }, [])

    const onSubmit = async data => {
        console.log(data)
        return await API.post('/register', data)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <AuthLayout>
            <div className='w-4/6 xs:w-5/6 border h-96 shadow-2xl'>
                <div className='px-8 xs:px-4 py-4'>
                    <h1>Sign In to continue</h1>
                </div>
                <div className='px-8 xs:px-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='py-3'>
                            <InputText {...register('name')} className='border h-9 w-full text-[14px] px-3' placeholder="Full name" />
                            <ErrorMessage 
                                errors={errors} 
                                name="name" 
                                render={({ type, message }) =>  <span key={type} className='text-[10px] text-red-700 py-2'>{message}</span>}
                            />
                        </div>
                        <div className='py-3'>
                            <InputText {...register('email')} className='border h-9 w-full text-[14px] px-3' placeholder="Email Address" />
                            <ErrorMessage 
                                errors={errors} 
                                name="email" 
                                render={({ type, message }) =>  <span key={type} className='text-[10px] text-red-700 py-2'>{message}</span>}
                            />
                        </div>
                        <div className='py-3'>
                            <InputText type='password' {...register('password')} className='border h-9 w-full text-[14px] px-3' placeholder="Password" />
                            <ErrorMessage 
                                errors={errors} 
                                name="password" 
                                render={({ type, message }) =>  <span key={type} className='text-[10px] text-red-700 py-2'>{message}</span>}
                            />
                        </div>
                        <div className='py-3'>
                            <InputText type='password' {...register('password_confirmation')} className='border h-9 w-full text-[14px] px-3' placeholder="Re-type Password" />
                            <ErrorMessage 
                                errors={errors} 
                                name="password_confirmation" 
                                render={({ type, message }) =>  <span key={type} className='text-[10px] text-red-700 py-2'>{message}</span>}
                            />
                        </div>
                        <div>
                            <button className='bg-purple-700 h-9 w-full text-white text-[12px]'>Sign Up</button>
                        </div>
                    </form>
                    <div className='py-4 w-full text-right'>
                        <Link to={'/signin'} className='text-[12px] underline'>Already have account? <span className='text-[10px] text-blue-700'>Login</span></Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default SignUp
