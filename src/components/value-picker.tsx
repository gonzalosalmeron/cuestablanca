import { SetStateAction } from 'react'

export default function ValuePicker({
  value,
  setValue,
}: {
  value: keyof ApiValue
  setValue: React.Dispatch<SetStateAction<keyof ApiValue>>
}) {
  const types = [
    'Energía Activa',
    'Energía Generada',
    'Energía Reactiva Inductiva',
    'Energía Inductiva Generada',
    'Energía Capacitiva Generada',
    'Energía Reactiva Capacitiva',
    'Cualificador de Energía Activa Importada',
    'Cualificador de Energía Activa Exportada',
    'Cualificador de Energía Inductiva Importada',
    'Cualificador de Energía Inductiva Exportada',
    'Cualificador de Energía Capacitiva Exportada',
    'Cualificador de Energía Capacitiva Importada',
    'Potencia Activa Total',
  ]

  return (
    <label>
      Selecciona un tipo a mostrar:
      <select onChange={(e: any) => setValue(e.target.value)}>
        {types.map((type, i) => (
          <option key={i} value={type} defaultValue={value}>
            {type}
          </option>
        ))}
      </select>
    </label>
  )
}
