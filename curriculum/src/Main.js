function Main({ language }) {
  return (
		<main>
			<div className="container-fluid pr-0 pl-0 pl-md-3 text-right">
				<div className="CV_title">
					<h1>Davide Lecci</h1>
					<h3>Cybersecurity specialist junior & Front-end developer</h3>
				</div>
			</div>
			<div className="container-fluid pr-0">
				<h3 className="main_title text-right pr-2 english-language">
					{language.education}
					<div className="arrow-left">
					</div>
				</h3>
				<div className="row no-gutters">
					<div className="time_cnt col-4">
						<p className="mb-0">{language.cyberStart}</p>
						<p className="mb-0">{language.cyberEnd}</p>
					</div>
					<div className="col-8 pr-3 pl-1">
						<p className="mb-0 institution">{language.cyberTitle}</p>
						<p className="mb-0 institution">Epicode</p>
						<p>{language.cyberDesc}</p>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="time_cnt col-4">
						<p className="mb-0">{language.booleanStart}</p>
						<p className="mb-0">{language.booleanEnd}</p>
					</div>
					<div className="col-8 pr-3 pl-1">
						<p className="mb-0 institution">{language.booleanTitle}</p>
						<p className="mb-0 institution">Boolean Careers</p>
						<p>{language.booleanDesc}</p>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="time_cnt col-4">
						<p className="mb-0">{language.bachelorStart}</p>
						<p className="mb-0">{language.bachelorEnd}</p>
					</div>
					<div className="col-8 pr-3 pl-1">
						<p className="mb-0 institution">{language.bachelorTitle}</p>
						<p className="mb-0 institution">{language.bachelorInstitute}</p>
						<p>{language.bachelorDesc}</p>
					</div>
				</div>
					<div className="row no-gutters">
						<div className="time_cnt col-4">
								<p className="mb-0">{language.diplomaStart}</p>
								<p className="mb-0">{language.diplomaEnd}</p>
						</div>
						<div className="col-8 pr-3 pl-1">
								<p className="mb-0 institution">{language.diplomaTitle}</p>
								<p className="mb-0 institution">{language.diplomaInstitute}</p>
								<p>{language.diplomaDesc}</p>
						</div>
					</div>
			</div>
			<div className="container-fluid pr-0">
				<h3 className="main_title text-right pr-2 english-language">
					Work experience
					<div className="arrow-left"></div>
				</h3>
				<h3 className="main_title text-right pr-2 italian-language">
					Esperienze lavorative
					<div className="arrow-left"></div>
				</h3>
				<div className="row no-gutters">
					<div className="time_cnt col-4">
						<p className="mb-0">{language.bitStart}</p>
						<p className="mb-0">{language.bitEnd}</p>
					</div>
					<div className="col-8 pr-3 pl-1">
						<p className="mb-0 institution">Front-end web developer</p>
						<p className="mb-0 institution">Bit s.p.a.</p>
						<p>{language.bitDesc}</p>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="time_cnt col-4">
						<p className="mb-0">{language.nephilaStart}</p>
						<p className="mb-0">{language.nephilaEnd}</p>
					</div>
					<div className="col-8 pr-3 pl-1">
						<p className="mb-0 institution">Front-end web developer</p>
						<p className="mb-0 institution">Nephila</p>
						<p>{language.nephilaDesc}</p>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="time_cnt col-4">
							<p className="mb-0">{language.facileStart}</p>
							<p className="mb-0">{language.facileEnd}</p>
					</div>
					<div className="col-8 pr-3 pl-1">
							<p className="mb-0 institution">Back-end Web developer</p>
							<p className="mb-0 institution">Facile.it</p>
							<p>{language.facileDesc}</p>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="time_cnt col-4">
						<p className="mb-0">{language.variousStart}</p>
						<p className="mb-0">{language.variousEnd}</p>
					</div>
					<div className="col-8 pr-3 pl-1">
						<p className="mb-0 institution">{language.variousTitle}</p>
						<p>{language.variousDesc}</p>
					</div>
				</div>
				<div className="row no-gutters">
					<div className="time_cnt col-4">
						<p className="mb-0">{language.civilStart}</p>
						<p className="mb-0">{language.civilEnd}</p>
					</div>
					<div className="col-8 pr-3 pl-1">
						<p className="mb-0 institution">{language.civilTitle}</p>
						<p className="mb-0 institution">{language.civilInstitution}</p>
						<p>{language.civilDesc}</p>
						
					</div>
				</div>
			</div>
		</main>
  )
}

export default Main;