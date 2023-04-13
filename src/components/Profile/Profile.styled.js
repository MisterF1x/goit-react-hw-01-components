import styled from '@emotion/styled';

export const ProfileBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: auto;
    padding: 20px;
    margin: 0 auto;
    border-radius: ${p => p.theme.radii.md};
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 5px 9px 0px rgba(139, 139, 139, 0.8);
`;
export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
`;
export const ProfileImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    margin: 0 auto;
`;
export const ProfileInfo = styled.p`
    font-size: 16px;
    text-align: center;
`;
export const ProfileName = styled.p`
    font-weight: 600;
    color: ${p => p.theme.colors.accent};
    text-align: center;
`;
export const StatsBlock = styled.ul`
    display: flex;
    gap: 10px;
`;
export const StatsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 250ms linear;
    :hover{
        color: ${p => p.theme.colors.accent};
        cursor: pointer;
    }
`;
export const StatsQuantity = styled.span`
    font-size: 16px;
    margin-left: 5px;
`;