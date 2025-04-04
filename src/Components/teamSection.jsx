import Styles from "./teamSection.module.css";
import Socials from "@/lib/socials/socials";
import Avatar from "@/lib/UIComponents/avatar";

/**
 * @param {Object} params 
 * @param {Array<{
 *      fullName: string,
 *      avatarImageUrl: string,
 *      positions: Array<[string]>
 * }>} params.teamMembers
 * 
 * @param {Array<[String]>} params.positions
 * @returns 
 */
export function TeamSection({teamMembers}){
    const teamToDraw = teamMembers.map((member, id) => {
        return <TeamMember key={id} personData={member}/>
    });

    if(teamToDraw == undefined || teamToDraw.length == 0)
        return;

    return (
        <div className={Styles.section}>
            <h2>Team</h2>
            <div className={Styles.teamMembersContainer}>
                {teamToDraw}
            </div>
        </div>
    )
}

/**
 * @param {Object} params 
 * @param {Object} params.personData
 * @param {String} params.personData.fullName
 * @param {String} params.personData.avatarImageUrl
 * @param {Array<String>} params.personData.positions
 * @param {Array<String>} params.personData.socialLinks
 */
export function TeamMember({personData}){
    return (
        <div className={Styles.teamMemberCard}>
            <Avatar src={personData.avatarImageUrl} className={Styles.avatar}/>
            <p className="u-text-secondary">{personData.fullName}</p>
            {personData?.positions?.map((position, id) => <p key={id} style={{ whiteSpace: 'pre-line', textAlign: "center" }}>{position}</p>)}
            <Socials linksArray={personData.socialLinks}/>
        </div>
    )
}