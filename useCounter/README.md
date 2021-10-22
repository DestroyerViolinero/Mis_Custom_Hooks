#useCounter hook

ejemplo de uso:
desestructuramos su contenido
```
    const {Counter, Increment, Decrement, Reset} = useCounter(10);
```
useCounter() //recibe un valor por defecto y es el mismo reset en el caso anterior '10'
Increment, Decrement, Reset //son funciones