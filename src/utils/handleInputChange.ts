export default function handleInputChange(event: any) {
  // @ts-ignore
  const { fields } = this.state;
  const { target } = event;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const { name } = target;

  // @ts-ignore
  const toggle = fields.map((input) => (input.name === name ? { ...input, value } : input));
  // @ts-ignore
  this.setState({
    fields: toggle,
  });
}
