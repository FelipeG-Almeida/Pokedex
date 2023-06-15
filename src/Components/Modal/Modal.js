import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function ModalComponent(props) {

    const { isOpen, onClose, title, text } = props

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"} motionPreset={"scale"}>
                <ModalOverlay />
                <ModalContent p={"60px 40px"}>
                    <ModalHeader
                        fontSize={"4.5rem"}
                        fontWeight={"700"}
                        fontFamily={"Poppins"}
                        textAlign={"center"}>
                        {title}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        fontSize={"1.15rem"}
                        fontWeight={"700"}
                        fontFamily={"Poppins"}
                        textAlign={"center"}>
                        {text}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
