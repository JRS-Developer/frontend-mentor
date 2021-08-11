const TotalSectionText = ({ title, hoverTitle, amount }) => {
	return (
		<div className="flex jc-space-between">
			<div className="flex jc-space-between fd-column">
				<h3 className="txt-normal fw-bolder">{title}</h3>
				<p className="cl-dark-gray txt-small">/ person</p>
			</div>
			<p className="txt-bigger cl-primary fw-bolder" title={hoverTitle}>
				${Number(amount) === 0 ? "0.00" : amount}
			</p>
		</div>
	);
};

export default TotalSectionText;
