import React from 'react'
import MeshGradient from '../organisms/meshGradient'


export interface IMeshLayout extends React.ComponentPropsWithoutRef<'div'> { }
export const MeshLayout = ({ className }: IMeshLayout) => {
    return (
        <div className={`absolute inset-0 -z-10 ${className}`}>
            <MeshGradient />
        </div>
    )
}

