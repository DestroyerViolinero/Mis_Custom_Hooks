# useForm

ejemplo de uso:

le pasamos los valores iniciales del formulario
desestructuramos su contenido
```
const initialForm = {
    id:1234,
    name:"Your name",
    email:"yourname@gmail.com"
};
const [values, handleInputChange, Reset] = useForm(initialForm);
```