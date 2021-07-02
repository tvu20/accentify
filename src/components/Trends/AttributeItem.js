const AttributeItem = props => {
  return (
    <div className='attribute-item'>
      <div className='attribute-item__header'>
        <h3 className='attribute-item__title'>{props.name}</h3>
        <h3 className='attribute-item__value'>{props.value}</h3>
      </div>
      <p className='attribute-item__desc'>{props.desc}</p>
    </div>
  );
};

export default AttributeItem;
