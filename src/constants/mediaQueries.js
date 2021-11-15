export const breakpoints={
	xs:576,
	sm:768,
	md:992,
	lg:1200,
	xl:1440,
	xxl:1800,
};

export const size= {
	xs:`${breakpoints.xs}px`,
	sm:`${breakpoints.sm}px`,
	md:`${breakpoints.md}px`,
	lg:`${breakpoints.lg}px`,
	xl:`${breakpoints.xl}px`,
	xxl:`${breakpoints.xxl}px`,
}

export const device={
	xs:`(max-width:${size.xs})`,
	sm:`(max-width:${size.sm})`,
	md:`(max-width:${size.md})`,
	lg:`(max-width:${size.lg})`,
	xl:`(max-width:${size.xl})`,
	xxl:`(max-width:${size.xxl})`,
}