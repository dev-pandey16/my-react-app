import {useForm} from 'react-hook-form';
import zod from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import InputAreaField from './form/inputAreaField';
import SubmitButton from './form/submit';

const schema  = zod.object({
    name : zod.string().min(2,"Name is required"),
    email: zod.string().email("invalid Email Address"),
    message : zod.string().min(10,"Message should be at least 10 characters long"),
    password: zod.string().min(8, "Password should be at least 8 characters long"),
});

const ContactForm = () => {
    const{register , handleSubmit , formState : {errors} , reset} = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            password: ''
        }
    });
    
    const onSubmit = (data) => {
        console.log("Form submitted successfully:", data);
        reset();
        alert("Form submitted successfully!");
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)} className = "max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
            <h2 className = "text-2xl font-bold text-center">Contact Us</h2>

            <InputAreaField
                label="Name"
                type = "name"
                register={register("name")}
                error={errors.name}
                placeholder="Enter your name"
            />

            <InputAreaField
                label="Email"
                type="email"
                register={register("email")}
                error={errors.email}
                placeholder="Enter your email"
            />

            <InputAreaField
                label="Message"
                type="message"
                register={register("message")}
                error={errors.message}
                placeholder="Enter your message"
            />

            <InputAreaField
                label="Password"
                type="password"
                register={register("password")}
                error={errors.password}
                placeholder="Enter your password"
            />

            <SubmitButton />
        </form>
    )
}

export default ContactForm;

            