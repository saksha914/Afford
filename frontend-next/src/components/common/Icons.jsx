import {
    GithubOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    MailOutlined,
    CodeOutlined,
    DatabaseOutlined,
    CloudOutlined,
    TeamOutlined,
    TrophyOutlined,
    BookOutlined,
    UserOutlined,
    SettingOutlined,
    ProjectOutlined,
    ExperimentOutlined,
    FileTextOutlined,
    GlobalOutlined
} from '@ant-design/icons';

export const SocialIcons = {
    Github: GithubOutlined,
    LinkedIn: LinkedinOutlined,
    Twitter: TwitterOutlined,
    Email: MailOutlined
};

export const SectionIcons = {
    Code: CodeOutlined,
    Database: DatabaseOutlined,
    Cloud: CloudOutlined,
    Team: TeamOutlined,
    Trophy: TrophyOutlined,
    Book: BookOutlined,
    User: UserOutlined,
    Settings: SettingOutlined,
    Project: ProjectOutlined,
    Experiment: ExperimentOutlined,
    File: FileTextOutlined,
    Global: GlobalOutlined
};

export const getIcon = (iconName, className = "text-4xl") => {
    const IconComponent = SectionIcons[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
}; 