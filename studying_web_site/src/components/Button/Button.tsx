import './button.scss';

export const Button = ({text, ...attr} : any) => {
    if(!attr.className) attr.className = "default";
  return (
    <button {...attr}>
        <span>{text}</span>
    </button>
  )
}
