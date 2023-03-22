import React from "react";


function ProjectItem(props) {
    return (
        
        <div className='project_card'>
        <img className="project_img" src={props.img} alt='img-demo' />
        <div className='project_card_div'>
          <h3 className='project_card_title'>{props.title}</h3>
          <div className='btns_container'>
            <button>
              <a className='btn-1' href={props.linkPrimaryBtn}>Vist</a>
            </button>
            <button>
              <a className='btn-2' href={props.linkSecondaryBtn}>Code</a>
            </button>
          </div>
        </div>
      </div>
    )
}

export { ProjectItem };