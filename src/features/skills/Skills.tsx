import { Grid } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { Skill } from '../../models/Skill.interface';
import './Skills.css';

export function Skills() {
	const backEndSkills = useAppSelector((state) => state.skills.backSkills);
	const frontEndSkills = useAppSelector((state) => state.skills.frontSkills);
	const softSkills = useAppSelector((state) => state.skills.softSkills);

	const skillsCards = (technoList: Skill[]) =>
		technoList.map((d) => (
			<Grid
				container
				direction='row'
				justifyContent='center'
				key={d.name}
				item
				xs={6}
				sm={4}
				md={3}
			>
				<div>
					<div className='whiteRound'>
						<img className='skillImage' alt={d.name} src={d.logoUrl}></img>
					</div>
					<h1 className=''>{d.name}</h1>
				</div>
			</Grid>
		));

	return (
		<div className='skills'>
			<Grid container direction='row' spacing={0}>
				<Grid container direction='row' justifyContent='center' item>
					<h1 className='skillCategoryTitle'>Front-End Skills</h1>
				</Grid>
				<Grid container direction='row' justifyContent='center' item>
					{skillsCards(frontEndSkills)}
				</Grid>
			</Grid>

			<Grid container direction='row' spacing={0}>
				<Grid container direction='row' justifyContent='center' item>
					<h1 className='skillCategoryTitle'>Back-End Skills</h1>
				</Grid>
				<Grid container direction='row' justifyContent='center' item>
					{skillsCards(backEndSkills)}
				</Grid>
			</Grid>

			<Grid container direction='row' spacing={0}>
				<Grid container direction='row' justifyContent='center' item>
					<h1 className='skillCategoryTitle'>Soft Skills</h1>
				</Grid>
				<Grid container direction='row' justifyContent='center' item>
					{skillsCards(softSkills)}
				</Grid>
			</Grid>
		</div>
	);
}
