package miniproject.miniproject6;

public class CompanyAddr extends Addr{
	private String companyName, departmentName, position;
	
	public CompanyAddr(String name, String phoneNumber, String email, String address, String group, String companyName, String departmentName, String position) {
		super(name, phoneNumber, email, address, group);
		this.companyName=companyName;
		this.departmentName=departmentName;
		this.position=position;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	
	@Override
	public void printInfo() {
		System.out.println("-------------------");
		System.out.println("이름 : " + getName());
		System.out.println("전화번호 : " + getPhoneNumber());
		System.out.println("이메일 : " + getEmail());
		System.out.println("주소 : " + getAddress());
		System.out.println("그룹 : " + getGroup());
		System.out.println("회사이름 : "+ companyName);
		System.out.println("부서이름 : "+ departmentName);
		System.out.println("직급 : "+position);
	}
	
	
	

}
