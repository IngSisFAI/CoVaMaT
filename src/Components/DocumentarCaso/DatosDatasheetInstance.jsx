import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState, useEffect, useRef } from 'react';
import { useGetVarietyTypesByDomain } from '../../Methods/VarietyType';
import { useGetVariationPointsByVarietyTypeAndDomain } from '../../Methods/VariationPoint';
import { useForm } from 'react-hook-form';
import { useGetVariationsByDomainVTVP } from '../../Methods/Variation';

function DatosDatasheetInstance({ dominio }) {
    const [variable, setVariable] = useState([
        { nombre: '', valor: '' }
    ]);
    const [varietyType, setVarietyType] = useState(null);
    const { loadingVT, errorVT, dataVT } = useGetVarietyTypesByDomain(dominio);

    const { register, formState: { errors }, handleSubmit, setValue, watch } = useForm(
        {
            defaultValues: {
                //  dominio: '0', // Seteo el valor por defecto del selector
                //selectorTipoVariedad: '',
            },
        }
    );
    const seleccionPuntoVariacion = watch("selectorPuntoVariacion"); // Obtener el valor del selector de tipo de variedad
    //const { loadingVP, errorVP, dataVP } = useGetVariationPointsByVarietyTypeAndDomain(dominio);
    const { loadingVP, errorVP, dataVP } = useGetVariationPointsByVarietyTypeAndDomain(varietyType, dominio);

    const { loadingV, errorV, dataV } = useGetVariationsByDomainVTVP(dominio, varietyType, seleccionPuntoVariacion);

    function useDataChangeEffect(data, callback) {
        const dataRef = useRef(data);

        if (data !== dataRef.current) {
            callback();
            dataRef.current = data;
        }
    }

    // Luego puedes usar este hook en tu componente de la siguiente manera:

    useDataChangeEffect(dataVT, () => {
        //console.log('dataDatasheet ha cambiado', dataDatasheet);
        // Aquí puedes llamar a tu método
        if (!loadingVT && dataVT) {
            setVarietyType(dataVT.getVarietyTypesByDomain[0].name)
        }
    });

    useEffect(() => {
        // llamo a los metodos que obtienen datos nuevamente
        //if (dataVT) {
            //console.log('valor dataVT: ', dataVT.getVarietyTypesByDomain[0].name)
        //    setVarietyType(dataVT.getVarietyTypesByDomain[0].name)
        //}
        if(dataV){
            console.log('Valor datav', dataV, ' valor de loading', loadingV, ' seleccion ', seleccionPuntoVariacion)
        }
        
    }, [dataV, seleccionPuntoVariacion ]);

    const handleSelectVT = (event) => {
        //console.log('actualizo variable estado: ', event.target.value)
        setVarietyType(event.target.value); // This will trigger a re-render with the new varietyType
    };
    //{...register("selectorTipoVariedad", { required: false })}
    return (
        <>
            <div className='row align-items-start'>
                <div className='card col-md-4 ml-3 p-0'>
                    <Form>
                        <h5 className='fw-bold card-header w-100' >Seleccione variedades para el caso</h5>
                        <div className='card-body'>

                            <Form.Group className="mb-2" controlId="tipoVariacion">
                                <FloatingLabel controlId='floatingSelect' label='Seleccionar Tipo de Variación'>
                                    <Form.Select aria-label='selector-tipo-variacion' onChange={handleSelectVT} >
                                        {!loadingVT && !errorVT && dataVT && dataVT.getVarietyTypesByDomain.map((varietyType, index) => (
                                            <option key={index} value={varietyType.name}>{varietyType.name}</option>
                                        )
                                        )}
                                    </Form.Select>
                                </FloatingLabel>

                            </Form.Group>

                            <Form.Group className="mb-2" controlId="puntoVariacion">
                                <FloatingLabel controlId='floatingSelect' label='Seleccionar Punto de Variación'>
                                    <Form.Select aria-label='selector-punto-variacion' {...register("selectorPuntoVariacion", { required: false })}>
                                        {!loadingVP && !errorVP && dataVP && dataVP.getVariationPointsByVarietyTypeAndDomain.map((variationPoint, index) => (
                                            <option key={index} value={variationPoint.name}>{variationPoint.name}</option>
                                        )
                                        )}
                                    </Form.Select>
                                </FloatingLabel>

                            </Form.Group>

                            <Form.Group className="mb-2" controlId="variedad">
                                <FloatingLabel controlId='floatingSelect' label='Seleccionar Variedad'>
                                    <Form.Select aria-label='selector-variedad'>
                                    {!loadingV && !errorV && dataV && dataV.getVariationsByDomainVTVP.map((variation, index) => (
                                            <option key={index} value={variation.name}>{variation.name}</option>
                                        )
                                        )}
                                    </Form.Select>
                                </FloatingLabel>

                            </Form.Group>

                            <Table striped bordered hover size='sm'>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Ingresar Variables</th>
                                    </tr>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                {/*Recorro el arreglo que guarda las cariables almacenadas */}
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><input className='no-outline border-0 bg-transparent w-100' /></td>
                                        <td><input className='no-outline border-0 bg-transparent w-100' /></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Table striped bordered hover size='sm'>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Ingresar Conjunto de valores</th>
                                    </tr>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                {/*Recorro el arreglo que guarda las cariables almacenadas */}
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><input className='no-outline border-0 bg-transparent w-100' /></td>
                                        <td><input className='no-outline border-0 bg-transparent w-100' /></td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Button className='float-end mb-2' variant="primary" type="submit">
                                Agregar
                            </Button>

                        </div>
                    </Form>
                </div>
                <div className='card col-md-4 ml-3 p-0'>
                    <Form>
                        <h5 className='fw-bold card-header w-100'>Datos del Caso</h5>
                        <Form.Group className="mb-2 card-body" controlId="datosCaso">
                            <p>Nombre:</p>
                            <p>Dominio:</p>
                            <p>Variedades:</p>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>

    )
}

export default DatosDatasheetInstance;