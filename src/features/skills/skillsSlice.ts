import { createSlice } from '@reduxjs/toolkit'
import { Skill } from '../../models/Skill.interface'
// Define a type for the slice state

interface SkillsState {
        frontSkills:Skill[],
        backSkills:Skill[],
        softSkills:Skill[]
  }

const initialSkillsState : SkillsState= {

        frontSkills: [
            {
                name:"React",
                logoUrl:'./logo_technos/react_logo_black.png',
                skillCap: 3.75
            },
            {
                name:"Angular",
                logoUrl:'./logo_technos/angular_logo_black.png',
                skillCap: 4.25
            },
            {
                name:"VueJS",
                logoUrl:'./logo_technos/vuejs_logo_black.png',
                skillCap: 3.75
            }
        ],
        backSkills: [
            {
                name:"Java",
                logoUrl:'./logo_technos/java.png',
                skillCap:7.5
            },
            {
                name:"Python",
                logoUrl:'./logo_technos/python.png',
                skillCap:8.5
            },
            {
                name:"NodeJS",
                logoUrl:'./logo_technos/nodeJs.png',
                skillCap:7.5
            }
        ],
        softSkills:[]
};
export const skillsSlice = createSlice({
  name: 'skills',
  initialState: initialSkillsState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const {  } = skillsSlice.actions


export default skillsSlice.reducer