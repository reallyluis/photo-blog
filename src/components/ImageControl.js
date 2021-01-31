import './ImageControl.css';

const ImageControl = ({uniqueId}) => {
  return (
    <div className="photo-grid__item-controls">
      <div className="photo-grid__view-toggle">
        <input type="checkbox" id={`"view-toggle-${uniqueId}"`} className="view-toggle__checkbox" />
        <label htmlFor={`"view-toggle-${uniqueId}"`} className="view-toggle__label"></label>
      </div>
    </div>
  );
}

export default ImageControl;