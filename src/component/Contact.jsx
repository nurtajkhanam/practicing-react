

const Contact = () => {
    const city = ['Dhaka', 'London', 'Dandi', 'Amsterdum'];
    return (
        <div>
          
                <ul>
                    {
                        city.map((item, i)=>{
                            return <li key={i.toString()}>{item}</li>
                        })
                    }
                </ul>
        
        </div>
    );
};

export default Contact;