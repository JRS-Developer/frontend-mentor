import { JobInterface } from "../Interfaces";
import FilterButton from "./FilterButton";

const JobItem = (props: JobInterface) => {
	return (
		<div>
			<img
				src={`${process.env.PUBLIC_URL}/assets/${props.logo}`}
				alt={props.company}
			/>
			<p>{props.company}</p>
			<p>{props.location}</p>
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
			{props.featured && <p>Featured</p>}
			{props.new && <p>New</p>}
			<br />
		</div>
	);
};

export default JobItem;
