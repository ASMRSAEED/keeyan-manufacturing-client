import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { isLoading, data: tools } = useQuery('tools', () =>
        fetch(`http://localhost:5000/tools`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading color={'#1414e3'} loading={isLoading} />
    }
    if (tools) {
        return (
            <div>
                <div className='w-3/4 mx-auto my-20 '>
                    <h1 className='text-3xl font-bold text-center  mb-2'>Our Products:</h1>
                    <div className='grid lg:grid-cols-2 '>
                        {
                            tools.map((tool, index) => <Tool key={index} tool={tool}></Tool>)
                        }
                    </div>
                </div>

            </div>
        );
    }
};

export default Tools;