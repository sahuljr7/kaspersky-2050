import Image from 'next/image'
import { Flame } from 'lucide-react'

export function Sidebar() {
  const predictions = [
    {
      year: 2040,
      city: 'BRUSSEL',
      title: 'Mass chip implantation',
      author: 'ALEXANDR IWAAC',
      image: '/placeholder.svg'
    },
    {
      year: 2030,
      city: 'CALIFORNIA',
      title: 'Antiviral Sputnik',
      author: 'PAVEL VOPHIRA',
      image: '/placeholder.svg'
    },
    {
      year: 2030,
      city: 'SOCHI',
      title: 'Robot-rescuer',
      author: 'ALEXANDR IWAAC',
      image: '/placeholder.svg'
    }
  ]

  return (
    <div className="w-80 border-l border-[rgba(255,255,255,0.1)] p-6">
      <div className="flex items-center gap-2 text-[#00FF94]">
        <Flame className="h-5 w-5" />
        <span className="font-bold">WHAT&apos;S HOT</span>
      </div>
      <div className="mt-6 space-y-6">
        {predictions.map((prediction, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="flex items-center gap-2 text-sm text-[#00FF94]">
              <span>{prediction.year}</span>
              <span>•</span>
              <span>{prediction.city}</span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div>
                <h3 className="font-bold group-hover:text-[#00FF94]">
                  {prediction.title}
                </h3>
                <p className="text-sm text-gray-500">{prediction.author}</p>
              </div>
              <Image
                src={prediction.image}
                alt={prediction.title}
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

