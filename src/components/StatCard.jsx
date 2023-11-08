function StatCard(props) {
  return (
    <div className={"w-100 md:w-1/2 lg:w-1/4 px-5 pb-5" + (props.customNumber == 3 ? " lg:w-4/12" : "")}>
        <div className="p-4 w-100 bg-white shadow-lg duration-300 hover:shadow-2xl rounded-2xl flex">
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
