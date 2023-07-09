import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #25262c;
  height: 100vh;
  padding: 20px;
`
export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  padding: 20px;
  display: flex;
  flex-direction: row;
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-size: 25px;
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 30px;
`

export const TextEditorImg = styled.img`
  height: 300px;
  width: 400px;
  margin-top: 40px;
  margin-right: 20px;
`
export const EditingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
`
export const UnorderLists = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ListItem = styled.li`
  list-style-type: none;
`
export const Button = styled.button`
  height: 25px;
  width: 100px;
  border: none;
  outline: none;
  background-color: transparent;
  margin: 10px;
`
export const HorizantalLine = styled.hr`
  border: 1px solid #cbd5e1;
  width: 500px;
`
export const TextAreaSection = styled.textarea`
  color: #ffffff;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration};
  font-style: ${props => props.fontStyle};
  padding: 20px;
`
