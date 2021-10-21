const FunctionalComponent = ({js,reactjs,nodejs,expjs})=> {
    return(
        <div>
            <h2>Functional Component</h2>
            <form action="">
                    <legend>Skills</legend>
                    <fieldset>                        
                        <input type="checkbox" value="Javascript"/>
                            <label htmlFor="javascript">{js}</label>
                        <input type="checkbox" value="React JS" />
                            <label htmlFor="javascript">{reactjs}</label><br/>
                        <input type="checkbox" value="Node JS"/>
                            <label htmlFor="javascript">{nodejs}</label>
                        <input type="checkbox" value="Experess JS"/>
                            <label htmlFor="javascript">{expjs}</label>
                    </fieldset>                    
            </form>
        </div>
    )
}

export default FunctionalComponent;