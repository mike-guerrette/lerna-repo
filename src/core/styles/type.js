import styled from 'react-emotion';
import {UI} from './colors';
import Spacing from './spacing';

// eslint-disable-next-line max-len
const UIFontStack = 'Input UI,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol';
// eslint-disable-next-line max-len
const LarsseitFontStack = 'Larsseit,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol';

const MonospaceFontStack = 'IBM Plex Mono, monospace';

const Size = {
  Large: 22,
  Default: 17,
  Small: 15,
  Micro: 13
};

const Weight = {
  Normal: 400,
  Medium: 500,
  Bold: 700
};

const SectionTitle = styled.div({
  color: UI.Text.Title,
  fontFamily: LarsseitFontStack,
  fontSize: 28,
  letterSpacing: -0.3,
  fontWeight: Weight.Bold,
  marginBottom: Spacing.xLarge
});

const SectionByline = styled.div({
  color: UI.Text.Byline,
  fontFamily: LarsseitFontStack,
  fontSize: Size.Large,
  marginBottom: Spacing.xLarge
});

const TextTitle = styled.div({
  color: UI.Text.Dark,
  fontWeight: 700,
  fontSize: 17,
  letterSpacing: -0.1,
  fontFamily: LarsseitFontStack,
  marginBottom: Spacing.Small
});

const TextDefault = styled.div(props => ({
  color: UI.Text.Default,
  fontFamily: LarsseitFontStack,
  lineHeight: 1.45,
  fontSize: Size.Default,
  fontWeight: props.bold ? Weight.Bold : ''
}));

const TextSmall = styled.div(props => ({
  color: UI.Text.Default,
  fontFamily: LarsseitFontStack,
  lineHeight: 1.45,
  fontSize: Size.Small,
  fontWeight: props.bold ? Weight.Bold : ''
}));

const TextMicro = styled.div(props => ({
  color: UI.Text.Light,
  fontFamily: LarsseitFontStack,
  lineHeight: 1.45,
  fontSize: Size.Micro
}));

const LabelDefault = styled.label({
  color: UI.Label.Default,
  fontFamily: LarsseitFontStack,
  fontSize: Size.Default,
  marginBottom: Spacing.Tiny,
  display: 'block'
});

const Type = {};
Type.Weight = Weight;
Type.Size = Size;

// Section
const Section = {};
Type.Section = Section;
Section.Title = SectionTitle;
Section.Byline = SectionByline;

// Text
const Text = {};
Type.Text = Text;
Text.Title = TextTitle;
Text.Default = TextDefault;
Text.Small = TextSmall;
Text.Micro = TextMicro;

const Label = {};
Type.Label = Label;
Label.Default = LabelDefault;

export {
  Section, Text, Label, UIFontStack, LarsseitFontStack, MonospaceFontStack, Size, Weight
};

export default Type;
