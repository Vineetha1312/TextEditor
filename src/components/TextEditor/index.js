import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {
  BgContainer,
  TextEditorContainer,
  TextEditorImg,
  EditingContainer,
  LeftSection,
  Heading,
  UnorderLists,
  ListItem,
  Button,
  HorizantalLine,
  TextAreaSection,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBoldText: false, isItalicStyle: false, isUnderlinedText: false}

  onClickBold = () => {
    this.setState(prevState => ({isBoldText: !prevState.isBoldText}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalicStyle: !prevState.isItalicStyle}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isUnderlinedText: !prevState.isUnderlinedText,
    }))
  }

  render() {
    const {isBoldText, isItalicStyle, isUnderlinedText} = this.state
    const boldIconColor = isBoldText ? '#faff00' : '#f1f5f9'
    const italicIconColor = isItalicStyle ? '#faff00' : '#f1f5f9'
    const underlineIconColor = isUnderlinedText ? '#faff00' : '#f1f5f9'
    const fontWeight = isBoldText ? 'bold' : 'normal'
    const fontStyle = isItalicStyle ? 'italic' : 'normal'
    const textDecoration = isUnderlinedText ? 'underline' : 'normal'
    return (
      <BgContainer>
        <TextEditorContainer>
          <LeftSection>
            <Heading>Text Editor</Heading>
            <TextEditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftSection>
          <EditingContainer>
            <UnorderLists>
              <ListItem>
                <Button onClick={this.onClickBold} data-testid="bold">
                  <VscBold size={25} color={boldIconColor} />
                </Button>
              </ListItem>
              <ListItem>
                <Button onClick={this.onClickItalic} data-testid="italic">
                  <GoItalic size={25} color={italicIconColor} />
                </Button>
              </ListItem>
              <ListItem>
                <Button onClick={this.onClickUnderline} data-testid="underline">
                  <AiOutlineUnderline size={25} color={underlineIconColor} />
                </Button>
              </ListItem>
            </UnorderLists>
            <HorizantalLine />
            <TextAreaSection
              rows={25}
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </EditingContainer>
        </TextEditorContainer>
      </BgContainer>
    )
  }
}

export default TextEditor
