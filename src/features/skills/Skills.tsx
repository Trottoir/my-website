import { Computer } from '@mui/icons-material';
import { Card, CardContent, Grid, Rating, styled } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { Skill } from '../../models/Skill.interface';
import './Skills.css';

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#000000',
	},
	'& .MuiRating-iconHover': {
		color: '#ff3d47',
	},
});

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
				xs={12}
				md={3}
			>
				<Card sx={{ minWidth: 275, maxWidth: 400 }}>
					<CardContent className='skillCardContent'>
						<h1>{d.name}</h1>

						<div className='whiteRound'>
							<img className='skillImage' alt={d.name} src={d.logoUrl}></img>
						</div>
						<StyledRating
							name='customized-color'
							readOnly
							value={d.skillCap}
							precision={0.5}
							icon={<Computer fontSize='inherit' />}
							emptyIcon={<Computer fontSize='inherit' />}
						/>
					</CardContent>
				</Card>
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

			<div className='centered'>
				<h1 className='titleCategorySkill'>Soft Skills</h1>
			</div>

			<div className='frontSkills'>{skillsCards(softSkills)}</div>
		</div>
	);
}
