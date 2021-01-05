const Icon = props => {
    const { name, size } = props;
    return (
        <i className="material-icons" style={{fontSize: size}}>
            {name}
        </i>
    );
};

const IconSwitch = props => {
    const { icon, onSwitch } = props;
    return (
        <div className="switch-view" onClick={onSwitch}>
            <Icon size={42} name={icon}/>
        </div>
    );
};

export default IconSwitch;
