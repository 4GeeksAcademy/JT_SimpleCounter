import React, {useState} from "react";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<div clasName="container-fluid">
			<div className="row my-5">
      			<div className="col-sm-12">
					<h1 className="text-center mt-5">Procastinando</h1>
					<div className="bigCounter">
						<div className="clock">
							<i className="far fa-clock"></i>
						</div>
						<div className="six">{props.digitSix % 10}</div>
						<div className="five">{props.digitFive % 10}</div>
						<div className="four">{props.digitFour % 10}</div>
						<div className="three">{props.digitThree % 10}</div>
						<div className="two">{props.digitTwo % 10}</div>
						<div className="one">{props.digitOne % 10}</div>
					</div>
				</div>
			</div>
			<div className="row my-5">
				<div className="fixed-bottom p-4 text-danger text-center">
        			Made with ❤️ by <b>Julia</b>
      			</div>
			</div>
		</div>
	);
};

export default Home;
