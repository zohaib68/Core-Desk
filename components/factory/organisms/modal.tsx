import React from "react"

export interface ImodalProps extends React.ComponentPropsWithoutRef<'dialog'> {
    modalId: string
}
export const Modal = ({ modalId, className, children, title, ...restProps }: ImodalProps) => {
    return (
        <dialog id={modalId} className={`modal ${className}`} {...restProps}>
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{title}</h3>
                <div className="pt-4">{children}</div>
            </div>
        </dialog>
    )
}

export const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    modal.close();
}

export const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    modal.showModal();
}