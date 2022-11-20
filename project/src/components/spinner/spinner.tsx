import './spinner-style.css';

type SpinnerProps = {
  spinnerSize: number[];
}

function Spinner({spinnerSize}: SpinnerProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('spinner');
  return (
    <div className='spinnet-main'style={{height: `${spinnerSize[0]}px`, width: `${spinnerSize[1]}px`}}>
      <div>1</div>
    </div>
  );
}

export default Spinner;
