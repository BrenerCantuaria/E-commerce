import styled from "styled-components"
interface PropsInput{
    type: string,
    nome: string,
    id:string,
    placeholder?:string
    children?: React.ReactNode
}
const InputHTML = styled.input`
   border: none;
   padding: 0.8rem;
   width: 80%;
   border: 5px;
`

function  Input({type,nome,id,placeholder,children}:PropsInput) {
  return (
     <InputHTML type={type} name={nome} id={id} placeholder={placeholder}>{children}</InputHTML>
  )
}

export default  Input
