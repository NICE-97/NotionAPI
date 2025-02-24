import React, { useState, useEffect } from 'react';
import Signature from './Signature';

function Quotation({ properties }) {
  const [isCheckedType, setIsCheckedType] = useState("");
  const [isTools, setTools] = useState("");

  const handleChangeTools = () => {
    setTools(isTools);
  };

  const handleChangeType = () => {
    setIsCheckedType(isCheckedType)
  };

  useEffect(() => {
    setIsCheckedType(properties.Type.multi_select[0]?.name);
    setTools(properties.Tools.multi_select[0]?.name);
  }, [properties])

  return (
    <>
      <div>
        <div className='flex justify-center'>
          <div className='max-w-xs mt-10 p-3 grid content-center'>
            <h3 className='font-bold text-4xl'>ใบเสนอราคา</h3>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 mt-10'>
          <div className='text-center'>
            <div className='mx-auto w-80 h-80 flex justify-center'>
              <img className='' src={properties?.["Clothing Styles And Fabric Pattern"]?.files[0]?.external?.url} alt={properties?.["Clothing Styles And Fabric Pattern"]?.files[0]?.name} />
            </div>
          </div>
          <div className='grid gap-2'>
            <div className='grid content-center'>
              <p className='border p-2'>วันที่ :
                <span className='font-medium'>ㅤ
                  {new Intl.DateTimeFormat('th-TH',
                    {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    }
                  ).format(new Date(properties?.Date?.date?.start))}
                </span>
              </p>
            </div>
            <div className='grid content-center'>
              <p className='border p-2'>เลขที่ล๊อต : <span className='font-medium'>ㅤ{properties?.["เลขที่ล็อต"]?.rich_text[0]?.plain_text}</span></p>
            </div>
            <div className='grid content-center'>
              <p className='border p-2'>รหัสแพทเทิร์น : <span className='font-medium'>ㅤ{properties?.["รหัสแพทเทิร์น"]?.rich_text[0]?.plain_text}</span></p>
            </div>
            <div className='grid content-center'>
              <p className='border p-2'>ชื่อ/บริษัท : <span className='font-medium'>ㅤ{properties?.["ชื่อ/บริษัท"]?.rich_text[0]?.plain_text}</span></p>
            </div>
            <div className='grid content-center'>
              <p className='border p-2'>สรุปราคาตัวอย่าง : <span className='font-medium'>ㅤ{properties?.["สรุปราคาตัวอย่าง"]?.rich_text[0]?.plain_text}</span></p>
            </div>
            <div className='grid content-center'>
              <p className='border p-2'>สรุปราคาผลิต : <span className='font-medium'>ㅤ{properties?.["สรุปราคาผลิต"]?.rich_text[0]?.plain_text}</span></p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 text-center mt-10'>
          <div>
            <h4 className='font-bold'>ความคิดเห็นเพิ่มเติม</h4>
            <div className='flex justify-center'>
              <div className='w-full h-44 border mt-10 p-4'>
                <span>ㅤ{properties?.["ความคิดเห็นเพิ่มเติม"]?.rich_text[0]?.plain_text}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-bold'>แผนก SubContract</h4>
            <div className='mt-10'>
              <div className='grid grid-cols-5'>
                <h4>ประเภท</h4>
                <input type="checkbox" checked={isCheckedType === "รายตัว" ? true : false} onChange={handleChangeType} />
                <p>รายตัว</p>
                <input type="checkbox" checked={isCheckedType === "ปัก" ? true : false} onChange={handleChangeType} />
                <p>ปัก</p>
              </div>
              <div className='grid grid-cols-5 mt-5'>
                <h4>อุปกรณ์</h4>
                <input type="checkbox" checked={isTools === "บริษัท" ? true : false} onChange={handleChangeTools} />
                <p>บริษัท</p>
                <input type="checkbox" checked={isTools === "ข้างนอก" ? true : false} onChange={handleChangeTools} />
                <p>ข้างนอก</p>
              </div>
            </div>
            <div className='flex mt-5 ml-5'>
              <div className='justify-items-start grid gap-4'>
                <p>จำนวน <span className='underline underline-offset-4'>ㅤㅤㅤㅤㅤ<span className='font-medium'>{properties?.["จำนวน"]?.rich_text[0]?.plain_text}</span>ㅤㅤㅤㅤㅤㅤㅤ</span> ตัว</p>
                <p>เสนอราคาตัวอย่าง <span className='underline underline-offset-4'>ㅤㅤㅤㅤ<span className='font-medium'>{properties?.["เสนอราคาตัวอย่าง"]?.rich_text[0]?.plain_text}</span>ㅤㅤㅤㅤㅤㅤ</span> ตัว</p>
                <p>เสนอราคาผลิต <span className='underline underline-offset-4'>ㅤㅤㅤㅤ<span className='font-medium'>{properties?.["เสนอราคาผลิต"]?.rich_text[0]?.plain_text}</span>ㅤㅤㅤㅤㅤㅤ</span> ตัว</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-20'>
        <Signature
          requesterTitle="ผู้ทบทวน"
          requesterId={properties?.["ผู้ทบทวน"]?.files[0]?.external?.url || ""}
          namerequesterId={properties?.["ชื่อผู้ทบทวน"]?.rich_text?.[0]?.text?.content || "\u00A0".repeat(40)}
          altrequesterId={properties?.["ผู้ทบทวน"]?.files[0]?.name}
          daterequesterId={properties?.["วันที่เซ็นผู้ทบทวน"]?.date?.start}
          approverTitle="ผู้อนุมัติ"
          approverId={properties?.["ผู้อนุมัติ"]?.files[0]?.external?.url || ""}
          nameapproverId={properties?.["ชื่อผู้อนุมัติ"]?.rich_text?.[0]?.text?.content || "\u00A0".repeat(40)}
          altapproverId={properties?.["ผู้อนุมัติ"]?.files[0]?.name}
          dateapproverId={properties?.["วันที่เซ็นผู้อนุมัติ"]?.date?.start}
          left={"left-18"}
        />
      </div>
    </>
  )
}

export default Quotation


