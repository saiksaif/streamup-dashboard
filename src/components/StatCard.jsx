import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';

function StatCard(props) {
  return (
    <div className="min-w-[200px]">
        <div className="p-4 w-100 bg-white shadow-lg rounded-2xl flex">
        <div className="w-4/6 text-center">
            <p className="text-xl font-medium">{props.stat}</p>
            <p className="mb-2 text-sm font-medium">{props.title}</p>
        </div>
        <div className='w-2/6 flex justify-center items-center'>
            <img src={props.image} alt="Card Image" width={50} />
        </div>
        </div>
    </div>
  );
}

export default StatCard;
