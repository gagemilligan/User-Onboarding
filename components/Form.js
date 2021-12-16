const initialFormValues = {
    name: '',
    email: '',
    password: '',
    terms: false,
}
const initialFormErrors = {
    name: ''
    email: '',
    password: '',
}
const initial = []




export default function Form() {
    <label>Name
<input
value= {values.name}
onChange = {onChange}
name = 'name'
type = 'text'
/>
</label>

<label>Email
    <input
    value = {value.email}
    onChange = {onChange}
    name = 'email'
    type = 'text'
</label>
}