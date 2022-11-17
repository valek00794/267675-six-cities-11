import './spinner-stile.css';

type SpinnerProps = {
  length: number;
}

function Spinner(length: SpinnerProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('spinner');
  const divHeigth = (Number(length) + 1) * 158.4;
  return (
    <div className='spinnet-main'style={{height: `${divHeigth}px`}}>

    </div>
  );
}

export default Spinner;
