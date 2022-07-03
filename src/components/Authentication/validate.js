export const validate = data => {
    const errors = {}

    //Nmae
    if(!data.name) errors.name = "Name Field cannot be empty"
    else delete errors.name

    //Email
    if(!data.email.trim()) errors.email = "Email Field cannot be empty!"
    else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(data.email)) errors.email = "Email is Invalid!"
    else delete errors.email

    //Password
    if(!data.password.trim()) errors.password = "Password Field cannot be empty!"
    else if((/[\u0600-\u06FF]/).test(data.password)) errors.password = "Please Enter a valid Password"
    else if(data.password.length < 8) errors.password = "Password Must be more than 8 characters!"
    else delete errors.password

    return errors
}