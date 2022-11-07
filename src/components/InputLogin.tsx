
// parâmetros que meu componente espera receber
interface IInputLoginProps {
    label: string;
    type: string;
    value: string;

    // evento
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}

// todas as vezes que formos tipar o componente, temos que dizer que ele é um React.FC (Functional Component)

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    
    return (
        <label>
            <span>{props.label}</span>

            <input
                value={props.value}
                type={props.type}
                placeholder="Digite sua senha"
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter'
                ? props.onPressEnter && props.onPressEnter() // se props.onPressEnter for diferente de 'undefinded' (setiver uma função entro de onPressEnter) ele executará o onPressEnter()
                : undefined}
            />
        </label>
    )
}