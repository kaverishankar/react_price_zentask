const data = [
    {
        subhead : 'FREE',
        head : "$0/month",
        content : [
            { sub : "Single User" , isenable : true },
            { sub : "50GB Storage" , isenable : true },
            { sub : "Unlimited Public Projects" , isenable : true },
            { sub : "Community Acess" , isenable : true },
            { sub : "Unlimited Public Projects" , isenable : false },
            { sub : "Dedicated phone Support" , isenable : false },
            { sub : "Free Subdomain" , isenable : false },
            { sub : "Monthly Status Reports" , isenable : false },
        ],
    },
    {
        subhead : 'PLUS',
        head : "$9/month",
        content : [
            { sub : "5 Users" , isenable : true },
            { sub : "50GB Storage" , isenable : true },
            { sub : "Unlimited Public Projects" , isenable : true },
            { sub : "Community Access" , isenable : true },
            { sub : "Unlimited Public Projects" , isenable : true },
            { sub : "Dedicated phone Support" , isenable : true },
            { sub : "Free Subdomain" , isenable : true },
            { sub : "Monthly Status Reports" , isenable : false },
        ],
    },
    {
        subhead : 'PRO',
        head : "$49/month",
        content : [
            { sub : "Unlimted Users" , isenable : true },
            { sub : "50GB Storage" , isenable : true },
            { sub : "Unlimited Public Projects" , isenable : true },
            { sub : "Community Access" , isenable : true },
            { sub : "Unlimited Public Projects" , isenable : true },
            { sub : "Dedicated phone Support" , isenable : true },
            { sub : "Free Subdomain" , isenable : true },
            { sub : "Monthly Status Reports" , isenable :  true },
        ],
    },
];

const Displaying = () =>
{
 return(
    <div
        style={{
            display:'flex',
            backgroundColor : '#3366ff',
            
           
        }}
    >
    {
        data.map((val) =>(
            <div
            key={val.head}
            style={{border: '2px solid', borderRadius: '10px',margin : '20px',padding : '16px',backgroundColor:'white' }}
            >
                <p>{val.subhead}</p>
                <h2 style={{borderBottom:'1px solid'}}>{val.head}</h2>
                {val.content.map((con) =>
                (
                    <h3 key={con.sub} style={{textAlign:'left',filter: con.isenable ? 'none' : 'blur(1px)'}}>
                        {con.isenable && <i className="fa-solid fa-check"></i>}
                        {!con.isenable && <i className="fa-solid fa-xmark"></i>}
                        {" "}{con.sub}
                    </h3>
                ))}
                <button style={{backgroundColor:'#3366ff',color:'white'}}>BUTTON</button>
            </div>
        ))}
    </div>
 );
 
};

export default Displaying