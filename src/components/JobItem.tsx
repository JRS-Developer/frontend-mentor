import { JobInterface } from "../Interfaces";
import FilterButton from "./FilterButton";

const JobItem = (props: JobInterface) => {
	return (
		<div>
			<div>
				<img
					src={`${process.env.PUBLIC_URL}/assets/${props.logo}`}
					alt={props.company}
					loading="lazy"
				/>
			</div>
			<div>
				<div>
					<p>{props.company}</p>
					{props.featured && <p>FEATURED</p>}
					{props.new && <p>NEW!</p>}
				</div>
				<div>
					<p>{props.role}</p>
				</div>
				<div>
					<p>{props.postedAt}</p>
					<p>{props.contract}</p>
					<p>{props.location}</p>
				</div>
			</div>
			<div>
				<FilterButton title={props.level} />
				<FilterButton title={props.role} />
				{props.tools.map((tool) => (
					<FilterButton key={`${tool}-${props.id}`} title={tool} />
				))}
				{props.languages.map((language) => (
					<FilterButton
						key={`${language}-${props.id}`}
						title={language}
					/>
				))}
			</div>
		</div>
	);
};

export default JobItem;
