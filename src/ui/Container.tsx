import React, {PropsWithChildren} from 'react';

const Container = ({children} : PropsWithChildren) => {
    return (
        <div className="lg:container mx-auto">
            {children}
        </div>
    );
};

export default Container;