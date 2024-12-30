import { Input as MaterialInput } from "./MaterialTailwind"
import {
    //Input,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "./MaterialTailwind";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import { useEffect, useState } from "react";

const DateInput = ({ setFieldValue,...other }) => {
    const [date, setDate] = useState();

    useEffect(() => {
        if (date) {
            setFieldValue("expiryDate",format(date,"P"))
        }
    }, [date])

    

    return (

        <div className="">
            <Popover placement="bottom">
                <PopoverHandler>
                    <Input
                        label="Select a Date"
                        //onChange={(value) => console.log("Hello")}
                        //value={date ? format(date, "PPP") : ""}
                        Icon={
                            () => (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_226_212)">
                                        <path d="M9.6675 19.032V11.031H8.718C8.03797 11.3935 7.38074 11.7973 6.75 12.24V13.2825C7.3125 12.897 8.2035 12.3525 8.637 12.117H8.655V19.032H9.6675ZM11.4495 17.0745C11.52 18.0345 12.3405 19.1835 14.004 19.1835C15.891 19.1835 17.004 17.5845 17.004 14.877C17.004 11.976 15.8325 10.875 14.0745 10.875C12.6855 10.875 11.379 11.883 11.379 13.5885C11.379 15.3285 12.615 16.2435 13.893 16.2435C15.012 16.2435 15.738 15.6795 15.9675 15.0585H16.008C16.002 17.0325 15.3165 18.3045 14.0505 18.3045C13.0545 18.3045 12.5385 17.6295 12.4755 17.0745H11.4495ZM15.879 13.599C15.879 14.643 15.0405 15.369 14.103 15.369C13.2015 15.369 12.387 14.7945 12.387 13.569C12.387 12.3345 13.26 11.754 14.139 11.754C15.0885 11.754 15.879 12.351 15.879 13.599Z" fill="#474935" fill-opacity="0.5" />
                                        <path d="M5.25 0C5.44891 0 5.63968 0.0790176 5.78033 0.21967C5.92098 0.360322 6 0.551088 6 0.75V1.5H18V0.75C18 0.551088 18.079 0.360322 18.2197 0.21967C18.3603 0.0790176 18.5511 0 18.75 0C18.9489 0 19.1397 0.0790176 19.2803 0.21967C19.421 0.360322 19.5 0.551088 19.5 0.75V1.5H21C21.7956 1.5 22.5587 1.81607 23.1213 2.37868C23.6839 2.94129 24 3.70435 24 4.5V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V4.5C0 3.70435 0.316071 2.94129 0.87868 2.37868C1.44129 1.81607 2.20435 1.5 3 1.5H4.5V0.75C4.5 0.551088 4.57902 0.360322 4.71967 0.21967C4.86032 0.0790176 5.05109 0 5.25 0ZM3 3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V4.5C22.5 4.10218 22.342 3.72064 22.0607 3.43934C21.7794 3.15804 21.3978 3 21 3H3Z" fill="#474935" fill-opacity="0.5" />
                                        <path d="M3.75 6C3.75 5.80109 3.82902 5.61032 3.96967 5.46967C4.11032 5.32902 4.30109 5.25 4.5 5.25H19.5C19.6989 5.25 19.8897 5.32902 20.0303 5.46967C20.171 5.61032 20.25 5.80109 20.25 6V7.5C20.25 7.69891 20.171 7.88968 20.0303 8.03033C19.8897 8.17098 19.6989 8.25 19.5 8.25H4.5C4.30109 8.25 4.11032 8.17098 3.96967 8.03033C3.82902 7.88968 3.75 7.69891 3.75 7.5V6Z" fill="#474935" fill-opacity="0.5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_226_212">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            )
                        }
                        {...other}

                    />
                </PopoverHandler>
                <PopoverContent>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        showOutsideDays
                        className="border-0"
                        classNames={{
                            caption: "flex justify-center py-2 mb-4 relative items-center",
                            caption_label: "text-sm font-medium text-gray-900",
                            nav: "flex items-center",
                            nav_button:
                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex font-medium text-gray-900",
                            head_cell: "m-0.5 w-9 font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal",
                            day_range_end: "day-range-end",
                            day_selected:
                                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                            day_today: "rounded-md bg-gray-200 text-gray-900",
                            day_outside:
                                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-gray-500 opacity-50",
                            day_hidden: "invisible",
                        }}
                        components={{
                            IconLeft: ({ ...props }) => (
                                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                            IconRight: ({ ...props }) => (
                                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}


export default DateInput;
