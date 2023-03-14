import React from 'react';
import yardSale from '../../assets/yard-sale.png';
import temperatureConv from '../../assets/temperature-converter.png';
import toDoList from '../../assets/to-do-list.png';
import movies from '../../assets/movies.png';
import ghSeeker from '../../assets/github-seeker.png';
import { ProjectItem } from './ProjectItem';
import './projects.css';


function Projects() {
  const projects = [
    {
      id: 'project_1',
      img: `${yardSale }`,
      title: 'Yard Sale',
      linkPrimaryBtn: 'https://yard-sale-ecommerce.vercel.app/',
      linkSecondaryBtn: 'https://github.com/Laurajcb/yardSale-e-commerce',
    },
    {
      id: 'project_2',
      img: `${temperatureConv}`,
      title: 'Temperature Converter',
      linkPrimaryBtn: 'https://temperature-converter-hazel.vercel.app/',
      linkSecondaryBtn: 'https://github.com/Laurajcb/yardSale-e-commerce',
    },
    {
      id: 'project_3',
      img: `${toDoList}`,
      title: 'Todo List',
      linkPrimaryBtn: 'https://lets-to-do-it.vercel.app/',
      linkSecondaryBtn: 'https://github.com/Laurajcb/Lets-to-do-it',
    },
    {
      id: 'project_4',
      img: `${movies}`,
      title: 'Movies',
      linkPrimaryBtn: 'https://movies-jsx.vercel.app/',
      linkSecondaryBtn: 'https://github.com/Laurajcb/Movies-jsx',
    },
    {
      id: 'project_5',
      img: `${ghSeeker}`,
      title: 'GitHub users seeker',
      linkPrimaryBtn: 'https://gh-user-seeker.vercel.app/',
      linkSecondaryBtn: 'https://github.com/Laurajcb/gh-user-seeker',
    },
  ];

  return (
    <div className='wrapper'>
      <section className='projects-main_container' id='projects'>
        <h1 className='project_title'>Know my work.</h1>
        <h5 className='project_subTitle'>Some of my personal projects</h5>
        <div className='project_cards_container'>
          {projects.map((project) => (
            <ProjectItem
              id={project.id}
              img={project.img}
              title={project.title}
              linkPrimaryBtn={project.linkPrimaryBtn}
              linkSecondaryBtn={project.linkSecondaryBtn}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export { Projects };