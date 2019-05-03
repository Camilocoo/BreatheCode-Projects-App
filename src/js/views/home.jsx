import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row p-2">
					<div className="col-2 col-md-1  p-1  text-center">
						<img
							className="img-fluid mt-md-1 "
							src="https://raw.githubusercontent.com/breatheco-de/assets/master/apis/img/icon/breathecode.32.ico"
						/>
					</div>
					<div className="col-10 col-md ">
						<p className="h3 mb-0 mt-1 mt-md-2">Pool of Projects</p>
					</div>
				</div>
				<div className="row border-top border-bottom ">
					<div className="col-12">filters</div>
				</div>
				<div className="row text-center text-md-left mt-2  border-bottom">
					<div className="col-12 col-md-2 text-center">
						<img
							className="img-fluid"
							src="https://github.com/breatheco-de/assets/blob/master/apis/img/4geeks-logo-black-small.png?raw=true"
						/>
					</div>
					<div className="col-12 col-md">
						<div className="row">
							<div className="col-12">
								<div className="h6">
									{" "}
									Build a postcard usign HTML and CSS{" "}
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<small className="text-muted">
									in the following technologies:
									<a>python</a> <a>flask </a>
									<a>REST</a>
									<a>API</a>
								</small>
							</div>
						</div>
						<div className="row">
							<div className="col-12 p-2 col-md">
								<span className="badge badge-pill badge-light">
									begginer{" "}
								</span>
								<span className="badge badge-pill badge-light">
									8 hours{" "}
								</span>
							</div>
							<div className="col-12 col-md-3 d-flex justify-content-md-end">
								<button
									type="button"
									className="btn btn-primary btn-sm mb-3 mx-auto">
									READ MORE
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
