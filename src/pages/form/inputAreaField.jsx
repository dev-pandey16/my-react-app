const InputAreaField = ({label , type = "text",register , error , placeholder}) => {

    return (
        <div>
            <label className="block font-medium">{label}</label>
            <input 
                type = {type}
                {...register}
                className = "w-full p-2 border rounded"
                placeholder={placeholder}
            />
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
}
export default InputAreaField;
